import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }
  return (
    <div className="flex justify-center items-center max-h-screen">
      <h2 className="text-2xl font-bold my-11">Welcome to your profile!</h2>
    </div>
  );
};

export default Profile;
