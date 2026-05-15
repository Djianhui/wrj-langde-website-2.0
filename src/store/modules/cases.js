import { defineStore } from 'pinia'
import { useLanguageStore } from './language'
import { computed } from 'vue'

export const useCasesStore = defineStore('cases', {
  state: () => {
    const languageStore = useLanguageStore();
    
    return {
      language: computed(() => languageStore.language),
      cases: {
        zh: [
          {
            id: 7,
            title: 'Pamirs-ADMET：基于深度学习的药物 ADMET 预测系统',
            tag: 'AI 应用',
            date: '2025-03-29',
            image: '/images/cases/yyal01.png',
            summary: '面向新药研发流程，构建基于图神经网络与多任务学习的 ADMET（吸收/分布/代谢/排泄/毒性）智能预测平台，从分子结构出发为先导化合物筛选与优化提供数据驱动决策。',
            highlight: '13000 分子训练库，平均 R² 达 0.88，毒性分类准确率 92%，单次 100 分子预测仅 12 秒',
            content: `
              <h2>项目背景</h2>
              <p>新药研发周期长、成本高，传统 ADMET（吸收 Absorption、分布 Distribution、代谢 Metabolism、排泄 Excretion、毒性 Toxicity）实验依赖大量动物试验与体外测试，存在周期长、成本高、可重复性差等痛点。客户希望借助深度学习能力在化合物早期筛选阶段快速预测 ADMET 性质，提升研发效率、降低后期失败风险。</p>

              <h2>面临挑战</h2>
              <ul>
                <li>药物分子结构复杂，传统描述符特征难以全面刻画分子拓扑信息</li>
                <li>ADMET 五大维度多端点同时建模，存在数据稀疏与任务不平衡问题</li>
                <li>预测结果需具备可解释性，方便药化专家审阅与决策</li>
                <li>需要高并发在线服务能力，支持大规模虚拟筛选场景</li>
              </ul>

              <h2>解决方案</h2>
              <p>依托四层架构（数据层 / 算法层 / 服务层 / 表现层）打造 Pamirs-ADMET 平台：</p>
              <ul>
                <li><strong>数据层</strong>：整合 ChEMBL、DrugBank 等公开数据库与自建实验数据，构建 13000 + 化合物训练库，统一 SMILES 标准化与分子图表征</li>
                <li><strong>算法层</strong>：基于 PyTorch 实现图神经网络（GNN）+ 多任务学习框架，500 epoch 训练后训练损失 0.12、验证损失 0.15，模型无明显过拟合</li>
                <li><strong>服务层</strong>：FastAPI 提供 RESTful 接口，支持单分子和批量 SMILES 输入，A100 单卡上 100 分子预测约 12 秒、1000 分子约 110 秒</li>
                <li><strong>表现层</strong>：Vue 3 前端可视化分子结构、五维 ADMET 雷达图与可信度评估，支持研发人员快速对比候选化合物</li>
              </ul>

              <h2>部署成效</h2>
              <ul>
                <li>五维端点平均 R² 达 0.88，平均 RMSE 0.34，回归任务整体表现稳定</li>
                <li>毒性分类任务准确率 92%、ROC-AUC 0.95，可有效辅助早期毒性筛除</li>
                <li>吸收 R²=0.88，分布 R²=0.85，代谢 R²=0.90，排泄 R²=0.87，多任务全维度均衡</li>
                <li>结合虚拟筛选可在数小时内完成万级化合物 ADMET 评估，研发效率显著提升</li>
              </ul>
            `,
            results: [
              '平均预测 R² 0.88',
              '毒性分类准确率 92%',
              'ROC-AUC 达 0.95',
              '100 分子预测仅 12 秒'
            ]
          },

          {
            id: 8,
            title: 'Pamirs-Docking：基于深度学习的蛋白质-分子对接与评分系统',
            tag: 'AI 应用',
            date: '2025-04-12',
            image: '/images/cases/yyal02.jpg',
            summary: '面向药物筛选与分子设计场景，集成 Uni-Dock、Uni-Mol-Docking-v2 与 EquiScore 三大深度学习模型，提供蛋白质-小分子对接、结合亲和力预测与 3D 可视化一体化服务。',
            highlight: '多模型融合对接成功率 92%，MAE < 1 kcal/mol，平均对接耗时 48 秒/对，24 小时高通量运行零崩溃',
            content: `
              <h2>项目背景</h2>
              <p>传统对接工具（AutoDock、GOLD、Glide 等）依赖物理力场与经验打分函数，在柔性口袋、金属介导、多位点结合等复杂场景下预测偏差大且算力耗费高。客户需要一套高精度、高吞吐的蛋白质-分子对接与评分平台，服务于药物筛选、先导化合物优化与作用机制研究。</p>

              <h2>面临挑战</h2>
              <ul>
                <li>多负载、多柔性场景下传统方法精度不足，难以准确捕捉动态结合特性</li>
                <li>万级化合物虚拟筛选需要高吞吐与低延迟，传统单机计算耗时过长</li>
                <li>需同时覆盖刚性 / 半柔性 / 柔性三种对接模式，并提供 3D 交互可视化以辅助药化专家决策</li>
                <li>客户希望能够与 PDB / SDF / MOL2 生态无缝接入，支持企业内部 API 编排</li>
              </ul>

              <h2>解决方案</h2>
              <p>采用「前端 + 后端 + 数据库」三层架构与模块化计算管线：</p>
              <ul>
                <li><strong>Uni-Dock（CNN + GNN）</strong>：针对高吞吐刚性 / 半柔性对接，提供快速构象预测</li>
                <li><strong>Uni-Mol-Docking-v2（Transformer）</strong>：针对柔性侧链与复杂口袋，输出高精度柔性对接构象</li>
                <li><strong>EquiScore</strong>：基于 E(3) 等变网络的亲和力评分模型，与实验值相关系数达 0.85</li>
                <li><strong>调度与服务</strong>：FastAPI + Celery 异步任务队列，支持多 GPU 集群并发；MySQL + Redis 管理任务与缓存；NGL Viewer + Three.js 实现 3D 可视化</li>
              </ul>

              <h2>部署成效</h2>
              <ul>
                <li>中等复杂场景 RMSD < 1.8Å，复杂场景下对接成功率达 88%，综合提升 92%</li>
                <li>EquiScore 亲和力预测 MAE < 1 kcal/mol，优于传统 Vina Score</li>
                <li>单次对接耗时从 120 秒压缩至 48 秒，1000 分子高通量任务 30 分钟完成</li>
                <li>连续运行 24 小时零崩溃，3D 可视化平均 32 FPS，实时交互体验良好</li>
              </ul>

            `,
            results: [
              '对接成功率 92%',
              'MAE < 1 kcal/mol',
              '单次对接 48 秒',
              '可视化平均 32 FPS'
            ]
          },

          {
            id: 9,
            title: 'Pamirs-molGen：基于深度学习的蛋白质口袋药物分子生成系统',
            tag: 'AI 应用',
            date: '2025-05-08',
            image: '/images/cases/yyal03.jpg',
            summary: '以蛋白质口袋结构为条件，融合 GAN、VAE 与强化学习模型，从分子片段逐步生成具备成药性与可合成性的候选药物分子，加速创新药发现与先导化合物优化。',
            highlight: '化学合理性 95%，平均 QED 0.65、SA 3.2，单 GPU 25 秒生成 10 个分子，支持 10 用户并发',
            content: `
              <h2>项目背景</h2>
              <p>创新药研发依赖高通量筛选从数百万化合物库中查找候选分子，耗时长、命中率低。客户希望基于蛋白质口袋结构直接生成针对性候选分子，拓宽化学空间探索范围，同时保证生成分子的化学合理性、可合成性与成药性。</p>

              <h2>面临挑战</h2>
              <ul>
                <li>传统规则驱动生成方法难以覆盖庞大化学空间，生成分子创新性有限</li>
                <li>生成分子需同时满足价键规则、Lipinski 五规则与与口袋高质量结合</li>
                <li>需要支持多用户并发与异步任务调度，保障生产环境下的响应速度</li>
                <li>对于复杂口袋，需从原始 PDB 中精准提取口袋边界与理化特性</li>
              </ul>

              <h2>解决方案</h2>
              <p>按「数据 / 算法 / 服务 / 表现」四层架构打造 Pamirs-molGen：</p>
              <ul>
                <li><strong>口袋特征提取</strong>：Alpha Shape 算法 + 能量优化边界识别，口袋提取准确率 92%，以 GNN 进一步编码空间与理化信息</li>
                <li><strong>GAN + VAE 混合生成模型</strong>：以口袋为条件，从初始片段逐步预测原子类型、坐标与键型，并引入蒙特卡洛树搜索与强化学习优化</li>
                <li><strong>多维度评估</strong>：集成 RDKit 与 AutoDock Vina，输出 SA、QED、Tanimoto 与结合亲和力等指标，帮助用户快速筛选优质分子</li>
                <li><strong>服务与表现</strong>：Flask + Celery 异步队列支持多用户并发，Vue 3 + Three.js 提供 3D 交互式分子查看与 SDF / CSV 一键导出</li>
              </ul>

              <h2>部署成效</h2>
              <ul>
                <li>生成分子化学合理性从 60% 提升至 95%，平均 QED 0.65、SA 3.2，85% 可合成性良好</li>
                <li>平均结合亲和力 -7.8 kcal/mol，80% 生成分子具备较强结合能力</li>
                <li>单 GPU 上 25 秒生成 10 个候选分子，内存占用下降 40%，同时支持 10 个用户并发</li>
                <li>连续运行 72 小时无崩溃，与企业内部分子数据库、CADD 平台可通过 API 无缝集成</li>
              </ul>

            `,
            results: [
              '化学合理性 95%',
              '平均 QED 0.65',
              '25 秒生成 10 个分子',
              '平均亲和力 -7.8 kcal/mol'
            ]
          }

        ],
        en: [
          {
            id: 7,
            title: 'Pamirs-ADMET: Deep Learning-based Drug ADMET Prediction System',
            tag: 'AI Application',
            date: '2025-03-29',
            image: '/images/cases/index_01.png',
            summary: 'An intelligent ADMET (Absorption / Distribution / Metabolism / Excretion / Toxicity) prediction platform built on graph neural networks and multi-task learning, providing data-driven decisions for lead compound screening and optimization from molecular structures.',
            highlight: '13,000-molecule training library, average R² of 0.88, 92% toxicity classification accuracy, only 12 seconds for 100-molecule prediction',
            content: `
              <h2>Project Background</h2>
              <p>Drug discovery is time-consuming and costly. Traditional ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) testing relies heavily on animal and in-vitro experiments, suffering from long cycles, high costs and limited reproducibility. The client wanted a deep-learning powered platform to predict ADMET properties at the early compound screening stage, improving R&D efficiency and reducing late-stage failure risk.</p>

              <h2>Challenges</h2>
              <ul>
                <li>Drug molecules have complex structures, and traditional descriptors hardly capture full topology information</li>
                <li>Modeling five ADMET dimensions simultaneously brings data sparsity and task imbalance</li>
                <li>Predictions must be interpretable for medicinal chemists to review and act on</li>
                <li>High-concurrency online service is needed for large-scale virtual screening</li>
              </ul>

              <h2>Solution</h2>
              <p>The Pamirs-ADMET platform is built on a four-tier architecture (data / algorithm / service / presentation):</p>
              <ul>
                <li><strong>Data tier</strong>: Integrates ChEMBL, DrugBank and proprietary experiments into a 13,000+ compound library with unified SMILES standardization and molecular graph representation</li>
                <li><strong>Algorithm tier</strong>: A PyTorch-based GNN + multi-task learning framework; after 500 epochs, training loss is 0.12 and validation loss 0.15 with no obvious overfitting</li>
                <li><strong>Service tier</strong>: FastAPI exposes RESTful endpoints for single and batch SMILES; on a single A100 GPU, 100 molecules take ~12s and 1,000 molecules ~110s</li>
                <li><strong>Presentation tier</strong>: A Vue 3 front-end visualizes molecular structures, five-dimensional ADMET radar charts and confidence scores for fast candidate comparison</li>
              </ul>

              <h2>Deployment Results</h2>
              <ul>
                <li>Average R² of 0.88 and RMSE of 0.34 across the five endpoints, with stable regression performance</li>
                <li>Toxicity classification reaches 92% accuracy and 0.95 ROC-AUC, effectively supporting early toxicity filtering</li>
                <li>Absorption R²=0.88, Distribution R²=0.85, Metabolism R²=0.90, Excretion R²=0.87 — well-balanced multi-task performance</li>
                <li>Combined with virtual screening, ten-thousand-scale ADMET evaluation can finish within hours, dramatically boosting R&D throughput</li>
              </ul>

              <h2>Client Testimonial</h2>
              <p>"Pamirs-ADMET lets us see drug-likeness risks during molecular design. Issues that used to surface only in in-vitro or animal studies are now caught upstream, which significantly improves both the speed and quality of our team's decisions."</p>
              <p style="text-align: right;">— Head of Computer-Aided Drug Design at the partner pharma company</p>
            `,
            results: [
              'Average prediction R² 0.88',
              'Toxicity classification accuracy 92%',
              'ROC-AUC up to 0.95',
              '100-molecule prediction in 12 seconds'
            ]
          },
          {
            id: 8,
            title: 'Pamirs-Docking: Deep Learning-based Protein-Ligand Docking and Scoring System',
            tag: 'AI Application',
            date: '2025-04-12',
            image: '/images/cases/yyal02.jpg',
            summary: 'An integrated protein-ligand docking and scoring platform that combines Uni-Dock, Uni-Mol-Docking-v2 and EquiScore for high-throughput screening, affinity prediction and 3D visualization.',
            highlight: '92% docking success rate, MAE < 1 kcal/mol, 48s average docking time, 24-hour high-throughput operation with zero crashes',
            content: `
              <h2>Project Background</h2>
              <p>Traditional docking tools (AutoDock, GOLD, Glide, etc.) rely on physical force fields and empirical scoring functions, which suffer from large prediction bias and high computational cost in complex scenarios such as flexible pockets, metal-mediated binding and multi-site interactions. The client needed a high-precision, high-throughput protein-ligand docking and scoring platform for compound screening, lead optimization and mechanism studies.</p>

              <h2>Challenges</h2>
              <ul>
                <li>Insufficient accuracy of traditional methods on flexible side chains and complex pockets</li>
                <li>Ten-thousand-scale virtual screening requires high throughput and low latency</li>
                <li>Must cover rigid / semi-flexible / flexible docking modes and provide 3D interactive visualization</li>
                <li>Should integrate with PDB / SDF / MOL2 ecosystems and expose internal APIs</li>
              </ul>

              <h2>Solution</h2>
              <p>A three-tier (front-end / back-end / database) architecture with a modular computing pipeline:</p>
              <ul>
                <li><strong>Uni-Dock (CNN + GNN)</strong>: fast pose prediction for high-throughput rigid / semi-flexible docking</li>
                <li><strong>Uni-Mol-Docking-v2 (Transformer)</strong>: high-precision flexible docking for flexible side chains and complex pockets</li>
                <li><strong>EquiScore</strong>: an E(3)-equivariant affinity scoring model with 0.85 correlation to experimental values</li>
                <li><strong>Scheduling and services</strong>: FastAPI + Celery async queues for multi-GPU concurrency, MySQL + Redis for tasks and cache, NGL Viewer + Three.js for 3D visualization</li>
              </ul>

              <h2>Deployment Results</h2>
              <ul>
                <li>RMSD < 1.8Å in medium-complexity scenarios; 88% success rate in complex scenarios; overall improvement up to 92%</li>
                <li>EquiScore affinity prediction MAE < 1 kcal/mol, outperforming traditional Vina Score</li>
                <li>Single-pair docking time reduced from 120s to 48s; 1,000-molecule high-throughput task finished in 30 minutes</li>
                <li>Zero crashes across 24-hour continuous operation; 32 FPS average for 3D visualization</li>
              </ul>

              <h2>Client Testimonial</h2>
              <p>"Pamirs-Docking integrates different docking and scoring models into a single workflow, letting us switch between high-throughput screening and detailed analysis with one click — our overall R&D pace is clearly faster."</p>
              <p style="text-align: right;">— Head of CADD team at the partner pharma company</p>
            `,
            results: [
              'Docking success rate 92%',
              'MAE < 1 kcal/mol',
              '48s per docking pair',
              '32 FPS visualization'
            ]
          },
          {
            id: 9,
            title: 'Pamirs-molGen: Deep Learning-based Pocket-aware Drug Molecule Generation System',
            tag: 'AI Application',
            date: '2025-05-08',
            image: '/images/cases/yyal03.jpg',
            summary: 'Conditioned on protein pocket structure, a hybrid GAN + VAE generative model with reinforcement learning gradually grows drug-like, synthesizable candidate molecules from seed fragments to accelerate novel drug discovery and lead optimization.',
            highlight: '95% chemical validity, average QED 0.65 / SA 3.2, 10 molecules generated in 25s on a single GPU, 10 concurrent users supported',
            content: `
              <h2>Project Background</h2>
              <p>Innovative drug discovery traditionally relies on high-throughput screening of millions of compounds, which is time-consuming and has a low hit rate. The client wanted to generate target-specific candidate molecules directly from protein pocket structures, expanding chemical-space exploration while ensuring chemical validity, synthesizability and drug-likeness.</p>

              <h2>Challenges</h2>
              <ul>
                <li>Rule-based generation hardly covers the vast chemical space; novelty is limited</li>
                <li>Generated molecules must satisfy valence rules, Lipinski's rule of five, and bind well to the pocket</li>
                <li>Multi-user concurrency and async task scheduling are required for production environments</li>
                <li>Pocket boundaries and physicochemical features must be accurately extracted from raw PDB inputs</li>
              </ul>

              <h2>Solution</h2>
              <p>A four-tier (data / algorithm / service / presentation) architecture powers Pamirs-molGen:</p>
              <ul>
                <li><strong>Pocket feature extraction</strong>: Alpha Shape + energy-optimized boundary detection achieves 92% pocket extraction accuracy, encoded by GNN</li>
                <li><strong>GAN + VAE hybrid generator</strong>: pocket-conditioned, growing molecules atom-by-atom with Monte Carlo Tree Search and reinforcement learning</li>
                <li><strong>Multi-dimension evaluation</strong>: integrated RDKit + AutoDock Vina output SA, QED, Tanimoto and binding affinity for fast filtering</li>
                <li><strong>Service and presentation</strong>: Flask + Celery async queues for multi-user concurrency, Vue 3 + Three.js for 3D molecule viewing and SDF / CSV export</li>
              </ul>

              <h2>Deployment Results</h2>
              <ul>
                <li>Chemical validity raised from 60% to 95%; average QED 0.65 / SA 3.2; 85% with good synthesizability</li>
                <li>Average binding affinity -7.8 kcal/mol; 80% of generated molecules show strong binding</li>
                <li>10 candidate molecules generated in 25s on a single GPU; 40% memory reduction; 10 concurrent users supported</li>
                <li>72-hour stable operation with zero crashes; integrates with internal molecule databases and CADD platforms via API</li>
              </ul>

              <h2>Client Testimonial</h2>
              <p>"Pamirs-molGen lets us obtain a batch of high-quality candidates directly from the pocket, skipping the old screen-optimize-rescreen loop and making it possible to advance multiple targets in parallel."</p>
              <p style="text-align: right;">— Head of drug design at the partner innovative-drug company</p>
            `,
            results: [
              'Chemical validity 95%',
              'Average QED 0.65',
              '10 molecules in 25 seconds',
              'Average affinity -7.8 kcal/mol'
            ]
          }
        ]
      }
    };
  },
  
  getters: {
    getAllCases(state) {
      return state.cases[state.language] || state.cases.zh;
    },
    
    getCaseById: (state) => (id) => {
      const currentCases = state.cases[state.language] || state.cases.zh;
      return currentCases.find(c => c.id === parseInt(id));
    }
  }
}) 