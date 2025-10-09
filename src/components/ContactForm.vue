<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">{{ formText.name }}</label>
        <input type="text" id="name" v-model="contactForm.name" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label for="email">{{ formText.email }}</label>
        <input type="email" id="email" v-model="contactForm.email" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label for="phone">{{ formText.phone }}</label>
        <input type="tel" id="phone" v-model="contactForm.phone" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label for="subject">{{ formText.subject }}</label>
        <select id="subject" v-model="contactForm.subject" class="form-control" required>
          <option value="" disabled selected>-- {{ isZh ? '请选择' : 'Please select' }} --</option>
          <option v-for="(option, index) in formText.subjectOptions" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="message">{{ formText.message }}</label>
        <textarea id="message" v-model="contactForm.message" class="form-control" rows="5" required></textarea>
      </div>
      
      <div v-if="success" class="alert alert-success">
        {{ formText.success }}
      </div>
      
      <div v-if="error" class="alert alert-error">
        {{ formText.error }}
      </div>
      
      <button type="submit" class="btn" :disabled="submitting">
        <span v-if="submitting">{{ isZh ? '提交中...' : 'Submitting...' }}</span>
        <span v-else>{{ formText.submit }}</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useContactStore } from '@/store/modules/contact'
import { useLanguage } from '@/mixins/language'
import { computed } from 'vue'

// 使用语言功能
const { isZh, isEn, getContactForm, getFormTranslations } = useLanguage()

// 获取表单文本 - 可以使用两种方式
// 1. 从translations store获取
const formText = computed(() => getContactForm())
// 2. 或者直接从contact store获取（已经自动处理语言）
// const formText = getFormTranslations

const contactStore = useContactStore()
const { contactForm, submitting, success, error } = storeToRefs(contactStore)

const submitForm = async () => {
  await contactStore.submitContactForm()
}
</script>

<style scoped>
.contact-form {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(255, 255, 255, 0.9) 100%);
  padding: 40px;
  border-radius: 24px;
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 8px 32px rgba(59, 130, 246, 0.08),
    0 2px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #0f172a;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
}

.form-control {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 2px solid rgba(226, 232, 240, 0.8);
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.form-control:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
  outline: none;
  background: rgba(255, 255, 255, 0.95);
}

.form-control:hover {
  border-color: rgba(59, 130, 246, 0.5);
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  padding-right: 48px;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;
}

/* 现代化提交按钮设计 */
.btn {
  width: 100%;
  margin-top: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #ffffff;
  border: none;
  padding: 16px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
}

.btn:hover::before {
  left: 100%;
}

.btn:active {
  transform: translateY(-1px);
}

.btn:disabled {
  background: linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%);
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 2px 8px rgba(148, 163, 184, 0.2);
}

.btn:disabled::before {
  display: none;
}

/* 现代化警告框设计 */
.alert {
  margin-bottom: 20px;
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid;
}

.alert-success {
  background: linear-gradient(135deg, 
    rgba(34, 197, 94, 0.1) 0%, 
    rgba(22, 163, 74, 0.05) 100%);
  color: #15803d;
  border-color: rgba(34, 197, 94, 0.3);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
}

.alert-error {
  background: linear-gradient(135deg, 
    rgba(239, 68, 68, 0.1) 0%, 
    rgba(220, 38, 38, 0.05) 100%);
  color: #dc2626;
  border-color: rgba(239, 68, 68, 0.3);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.1);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .contact-form {
    padding: 32px 24px;
  }
  
  .form-control {
    padding: 12px 14px;
    font-size: 0.95rem;
  }
  
  .btn {
    padding: 14px 20px;
    font-size: 0.95rem;
  }
}

@media (max-width: 576px) {
  .contact-form {
    padding: 24px 20px;
  }
  
  label {
    font-size: 0.9rem;
  }
  
  .form-control {
    padding: 12px;
    font-size: 0.9rem;
  }
  
  .btn {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
}
</style> 