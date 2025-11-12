import { useEffect, useState } from "react";

const EditAvatar = () => {
  const [avatar, setAvarar] = useState(
    "https://nhadepqueta.com/wp-content/uploads/2025/08/avatar-fb-mac-dinh.jpg"
  );

  const handleChange = (e) => {
    const file = e.target.files[0];
    setAvarar(file ? URL.createObjectURL(file) : avatar);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  return (
    <div className="mt-3 flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl">Preview Avata</h1>
      <label>
        <input type="file" hidden onChange={handleChange} />
        <img className="h-30 w-30 rounded-full" src={avatar} alt="" />
      </label>
    </div>
  );
};

export default EditAvatar;
