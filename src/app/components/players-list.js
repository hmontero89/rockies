"use client";

export default function PlayersList({ players }) {
  const goToDetail = () => {
    console.log("Navigating to detail...");
  };

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {players.map((player) => (
        <li key={player.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {player.name}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <button
              className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
              onClick={goToDetail}
            >
              Ir a detalle
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
