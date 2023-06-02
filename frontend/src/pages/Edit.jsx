import { Link, useParams } from 'react-router-dom';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function Edit() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    const { data } = await axios.get(`/products/${id}`);
    setDatas(data);
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <Link
        to="/"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Home
      </Link>
      <Form type="update" data={datas} />
    </div>
  );
}
