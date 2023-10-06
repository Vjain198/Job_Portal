export const getDetailData = async (
  page = 1,
  id = 1,
  type = "sort_by",
  sort = 1
) => {
  const res = await fetch(
    `http://niyuktitest.getwork.org/job/student/job/get/?page=${page}&&job_type_id=${id}&&${type}=${sort}`
  );

  return res.json();
};

export const getFilterData = async () => {
  const res = await fetch(
    "http://niyuktitest.getwork.org/job/student/job/filter/?format=json"
  );
  return res.json();
};
