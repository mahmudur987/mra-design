import { StoreIcon } from "lucide-react";

const UnderMaintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md p-8">
        <div className="mx-auto text-center bg-red-50 flex items-center justify-center">
          <StoreIcon className="w-52 text-7xl h-52" />
        </div>
        <h1 className="text-4xl font-bold text-center">Under Maintenance</h1>
        <p className="text-xl text-center">
          Sorry for the inconvenience but we are currently performing
          maintenance tasks. We will be back online soon.
        </p>
      </div>
    </div>
  );
};

export default UnderMaintenance;
