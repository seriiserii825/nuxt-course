// composables/usePosts.ts
import { ref } from 'vue';
import { useLazyFetch } from '#app';

export const usePosts = () => {
  const data = ref([]);
  const status = ref(null);
  const loading = ref(false);

  const fetchPosts = async () => {
    loading.value = true;
    try {
      const { data: fetchedData, status: fetchedStatus } = await useLazyFetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      data.value = fetchedData.value;
      status.value = fetchedStatus.value;
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      loading.value = false;
    }
  };

  // Initial fetch when the composable is used
  fetchPosts();

  return {
    data,
    status,
    loading,
    fetchPosts, // Method to re-fetch the data
  };
};
