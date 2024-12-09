const InfoBox = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNSixTZb6_dPC44Xoxw5TdoohA6H1hIYz5N8MhG=s680-w680-h510"
          alt="Logo Placeholder"
          className="rounded-md w-full sm:w-1/3 h-40 object-cover sm:h-auto"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <p className="font-bold text-gray-800 text-lg">Sekolah Developer Indonesia</p>
          <p className="text-gray-600 mt-2">Informasi Lokasi:</p>
          <p className="text-gray-600">Alamat: Country in popular belief</p>
          <p className="text-gray-600">Telepon: 812xxx</p>
        </div>
      </div>
    );
  };
  
  export default InfoBox;
  