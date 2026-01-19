import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ApiService from "./api.service.js";

import Card from "./components/Card.jsx";

export default function App() {
  const [users, setUsers] = useState([]);

  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 5,
  });

  const fetchData = async () => {
    const data = await ApiService.getUsers();

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(users.length / pagination.perPage);

  return (
    <main>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-10">
        {users
          .slice(
            (pagination.page - 1) * pagination.perPage,
            (pagination.page - 1) * pagination.perPage + pagination.perPage,
          )
          .map((user, i) => {
            return (
              <div className="flex justify-center">
                <Card
                  key={user?.id}
                  name={user?.name}
                  link={user?.website}
                  companyName={user?.company?.name}
                  username={user?.username}
                  email={user?.email}
                  address={user?.address}
                />
              </div>
            );
          })}
      </div>

      <div className="mt-10 mb-5 flex justify-center gap-3">
        <button
          disabled={pagination.page < 2}
          onClick={() =>
            setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
          }
          type="button"
          className="flex items-center gap-1 bg-blue-400 text-white px-5 py-2 hover:bg-blue-500 duration-300 disabled:bg-blue-400/50 rounded-md"
        >
          <FaChevronLeft /> Prev
        </button>

        <button
          disabled={
            pagination.page >= Math.ceil(users.length / pagination.perPage)
          }
          onClick={() =>
            setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
          }
          type="button"
          className="flex items-center gap-1 bg-blue-400 text-white px-5 py-2 hover:bg-blue-500 duration-300 disabled:bg-blue-400/50 rounded-md"
        >
          Next <FaChevronRight />
        </button>
      </div>
    </main>
  );
}
