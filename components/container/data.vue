<template>
  <div v-if="props.status === 'pending' || props.status === 'fetching'">
    <UiLoader/>
  </div>
  <div v-else-if="props.status === 'success'">
      <slot/>
  </div>
  <div v-else>
    <UiError404 v-if="props.error.statusCode == 404"/>
    <UiErrorMessage v-else :message="props.error.cause.message"/>
  </div>
</template>

<script setup>
const props = defineProps({
  status: {
    type: String,
    validator: (value) => ["idle", "pending", "success", "error"].includes(value),
    default: 'success'
  },
  error: {
    type: (Object || Null),
    default: null
  },
  isFront: {
    type: Boolean,
  },
});
if (props.error) {
  console.error("Error fetching services:", props.error);
}
</script>