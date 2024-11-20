export const useDomain = (link) => {
    return (useRuntimeConfig().public.apiBase + link);
}