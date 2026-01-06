import { useState, useEffect } from "react";
import request from "../utils/request";

const useFetchData = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const res = await request(url, options);
      setData(res.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onReload = async () => {
    setLoading(true);
    setError(false);
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error, setData, onReload };
};

export default useFetchData;
