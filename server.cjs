const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

// 初始化Express应用
const app = express();
const PORT = process.env.PORT || 8080;
const JWT_SECRET = process.env.JWT_SECRET || 'lande-intelligent-secret-key';

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 模拟数据文件路径
const DATA_DIR = path.join(__dirname, 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// 确保数据目录存在
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 确保uploads目录存在
const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// 初始化数据文件
const initDataFile = (filePath, initialData) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
  }
};

// 初始化内容数据
initDataFile(CONTENT_FILE, {
  'site-info': {
    companyName: '杭州朗德智能科技有限公司',
    slogan: '智能科技，创造可能',
    description: '用智能科技赋能产业升级，驱动未来创新',
    contactInfo: {
      address: '浙江省杭州市滨江区科技园区创新大厦A座15楼',
      phone: '0571-8888 9999',
      email: 'info@landeintelligent.com'
    }
  },
  'solutions': [
    {
      id: 'automation',
      title: '工业自动化解决方案',
      description: '为制造业提供智能化、自动化的生产线解决方案，提高生产效率，降低人力成本。',
      image: '/images/solution-1.jpg',
      details: '我们的工业自动化解决方案融合了先进的自动化控制技术与人工智能算法，可根据企业生产需求进行量身定制...'
    },
    {
      id: 'iot',
      title: '智能物联网解决方案',
      description: '构建万物互联的智能网络，实现设备间的智能通信与协作，打造智慧城市、智慧工厂。',
      image: '/images/solution-2.jpg',
      details: '朗德智能的物联网解决方案采用分布式架构，结合边缘计算与云端服务，实现设备的智能互联与协同...'
    }
  ],
  // 其他内容数据...
});

// 初始化消息数据
initDataFile(MESSAGES_FILE, []);

// 初始化用户数据
initDataFile(USERS_FILE, [
  {
    id: 1,
    username: 'admin',
    password: 'admin123', // 实际应用中应该使用加密密码
    role: 'admin'
  }
]);

// 读取数据文件
const readDataFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
  return null;
};

// 写入数据文件
const writeDataFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// JWT认证中间件
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: '未提供认证令牌' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '令牌无效或已过期' });
    }
    req.user = user;
    next();
  });
};

// 文件上传配置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// API路由

// 获取内容
app.get('/api/content/:type', (req, res) => {
  const contentType = req.params.type;
  const contentData = readDataFile(CONTENT_FILE);
  
  if (contentData && contentData[contentType]) {
    res.json(contentData[contentType]);
  } else {
    res.status(404).json({ message: '内容不存在' });
  }
});

// 更新内容（需要认证）
app.put('/api/admin/content/:type', authenticateToken, (req, res) => {
  const contentType = req.params.type;
  const newContent = req.body;
  const contentData = readDataFile(CONTENT_FILE);
  
  if (contentData) {
    contentData[contentType] = newContent;
    writeDataFile(CONTENT_FILE, contentData);
    res.json({ success: true, message: '内容已更新' });
  } else {
    res.status(500).json({ message: '内容数据读取失败' });
  }
});

// 上传图片（需要认证）
app.post('/api/admin/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({
      success: true,
      url: `/uploads/${req.file.filename}`
    });
  } else {
    res.status(400).json({ message: '上传失败' });
  }
});

// 提交联系表单
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: '请填写所有必填字段' });
  }
  
  const messages = readDataFile(MESSAGES_FILE) || [];
  
  const newMessage = {
    id: Date.now(),
    name,
    email,
    phone,
    message,
    read: false,
    createdAt: new Date().toISOString()
  };
  
  messages.push(newMessage);
  writeDataFile(MESSAGES_FILE, messages);
  
  res.json({ success: true, message: '消息已提交' });
});

// 获取消息列表（需要认证）
app.get('/api/admin/messages', authenticateToken, (req, res) => {
  const messages = readDataFile(MESSAGES_FILE) || [];
  res.json(messages);
});

// 标记消息为已读（需要认证）
app.put('/api/admin/messages/:id/read', authenticateToken, (req, res) => {
  const messageId = parseInt(req.params.id);
  const messages = readDataFile(MESSAGES_FILE) || [];
  
  const messageIndex = messages.findIndex(msg => msg.id === messageId);
  
  if (messageIndex !== -1) {
    messages[messageIndex].read = true;
    writeDataFile(MESSAGES_FILE, messages);
    res.json({ success: true });
  } else {
    res.status(404).json({ message: '消息不存在' });
  }
});

// 删除消息（需要认证）
app.delete('/api/admin/messages/:id', authenticateToken, (req, res) => {
  const messageId = parseInt(req.params.id);
  const messages = readDataFile(MESSAGES_FILE) || [];
  
  const updatedMessages = messages.filter(msg => msg.id !== messageId);
  
  if (updatedMessages.length < messages.length) {
    writeDataFile(MESSAGES_FILE, updatedMessages);
    res.json({ success: true });
  } else {
    res.status(404).json({ message: '消息不存在' });
  }
});

// 用户登录
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const users = readDataFile(USERS_FILE) || [];
  
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // 生成JWT令牌
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } else {
    res.status(401).json({ message: '用户名或密码错误' });
  }
});

// 验证令牌
app.post('/api/auth/validate', (req, res) => {
  const { token } = req.body;
  
  if (!token) {
    return res.json({ valid: false });
  }
  
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({ valid: false });
    }
    
    res.json({ valid: true, user: decoded });
  });
});

// 获取当前用户信息（需要认证）
app.get('/api/auth/me', authenticateToken, (req, res) => {
  res.json(req.user);
});

// 前端路由支持
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});