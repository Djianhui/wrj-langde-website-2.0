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
  background: var(--light-bg);
  padding: 30px;
  border-radius: 8px;
}

.form-control {
  margin-bottom: 5px;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: #4facfe;
  box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.2);
  outline: none;
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234facfe' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
}

.btn {
  width: 100%;
  margin-top: 10px;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
}

.btn:disabled {
  background: #94a3b8;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.alert {
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
}

.alert-success {
  background-color: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.alert-error {
  background-color: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #334155;
}
</style> 