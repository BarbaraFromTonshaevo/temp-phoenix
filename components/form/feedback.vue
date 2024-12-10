<template>
  <div>
    <ClientOnly>
      <Vueform
        class="feedback-form"
        :display-errors="false"
        endpoint="false"
        @submit="sendForm"
      >
        <TextElement
          name="name"
          type="text"
          placeholder="Имя*"
          fieldName="Имя"
          :rules="['required', 'max:255']"
          autocomplete="off"
          class="feedback-form__field"
        />
        <TextElement
          name="phone"
          type="text"
          placeholder="Телефон*"
          :rules="['required']"
          fieldName="Телефон"
          mask="+7 (000)-000-0000"
          autocomplete="off"
          class="feedback-form__field"
        />
        <TextElement
          name="email"
          type="text"
          inputType="email"
          :rules="['required', 'max:255', 'email']"
          placeholder="Электронная почта*"
          fieldName="Электронная почта"
          autocomplete="off"
          class="feedback-form__field"
        />
        <TextareaElement
          name="comment"
          type="textarea"
          placeholder="Комментарий"
          fieldName="Комментарий"
          :rows="1"
        />
        <ButtonElement
          name="register"
          type="button"
          :submits="true"
          buttonLabel="Отправить"
          :full="true"
          size="lg"
          class="feedback-form__submit"
          :hoverDisabled="false"
        />
      </Vueform>
    </ClientOnly>
  </div>
</template>

<script setup>
const emits = defineEmits(["success", "error"]);

function sendForm(form) {
  const formJSON = form.data;
  formJSON["webform_id"] = "order";
  formJSON["send_target"] = document.title;
  postForm(formJSON, form);
}

async function postForm(formJSON, form) {
  // formJSON
  // successCallback
  // errorCallback
  usePostForm(
    formJSON,
    () => {
      emits("success");
      form.reset();
    },
    (e) => {
      emits("error", e);
    }
  );
}
</script>

<style lang="scss" scoped>
.feedback-form {
  :root,
  :before,
  :after,
  * {
    --vf-border-color-input: var(--stroke-primary);
    --vf-bg-input: var(--bg-primary);
    --vf-border-width-input-t: 0px;
    --vf-border-width-input-r: 0px;
    --vf-border-width-input-b: 1px;
    --vf-border-width-input-l: 0px;
    --vf-radius-input: 0;
    --vf-bg-input-focus: var(--bg-primary);
    --vf-border-color-input-focus: var(--stroke-secondary);
    --vf-ring-color: transparent;
    --vf-font-size: 1.125rem;
    --vf-py-input: 1.25rem;
    --vf-px-input: 0.5rem;
    --vf-color-input-success: var(--text-primary);
    --vf-color-placeholder: var(--text-default-additional);
    --vf-primary: var(--btn-primary);
    --vf-border-color-btn: var(--btn-primary);
    --vf-radius-btn-lg: 3.75rem;
    --vf-font-size-lg: 1.125rem;
    --vf-py-btn-lg: 1.25rem;
    --vf-px-btn-lg: 1.25rem;
  }
  & {
    width: 100%;
  }
  &__filed {
    display: flex;
    width: 100%;
  }
  &__submit {
    margin-top: 38px;
    #register:hover {
      transform: none !important;
      background-color: var(--btn-primary-hover);
    }
  }
}
</style>
<style lang="scss">
.feedback-form {
  &__submit {
    #register {
      transform: background-color 0.8s;
      &:hover {
        transform: none !important;
        background-color: var(--btn-primary-hover);
      }
    }
  }
}
</style>
