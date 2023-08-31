import { useState } from "react";

const usePreviousAndNextPage = (currentPage, maxPage) => {
  const [previousPage, setPreviousPage] = useState(
    currentPage > 1 ? currentPage - 1 : undefined
  );

  const [nextPage, setNextPage] = useState(
    currentPage < maxPage ? currentPage + 1 : undefined
  );

  console.log(previousPage, nextPage);
  return { previousPage, nextPage };
};

export default usePreviousAndNextPage;

// const usePreviousAndNextPage = (currentPage, maxPage) => {
//   const previousPage = computed(() => {
//     const previousPage = currentPage.value - 1;
//     const firstPage = 1;
//     return previousPage >= firstPage ? previousPage : undefined;
//   });

//   const nextPage = computed(() => {
//     const nextPage = currentPage.value + 1;
//     return nextPage <= maxPage.value ? nextPage : undefined;
//   });
//   return { previousPage, nextPage };
// };

// export default usePreviousAndNextPage;
