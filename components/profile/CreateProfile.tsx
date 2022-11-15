import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { fetcher } from "../../helpers/fetcher";

import ImageProfile from "../header/ImageProfile";
function createProfile({ data }) {
  const { name, email } = data;
  const [profile, setProfile] = useState({
    professional_bio: "",
    bio: "",
    experience: "",
    skill: "",
    location: "",
    github: "",
    twitter: "",
  });
  const handleOnUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: [value],
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = "/api/profile";
    const userData = {
      profile,
      data,
    };
    const response = await fetcher(userData, url, "POST");
  };
  return (
    <div>
      <div className="bg-scroll bg-my_bg_image h-36 my-clip-path"></div>
      <div className="px-4 -mt-20">
        <div>
          <div className="md:flex md:flex-row md:justify-between items-center relative justify-center m-2">
            <div className="flex md:flex-row items-center">
              <div>
                <ImageProfile
                  height={150}
                  width={150}
                  classname="rounded-full border-4 border-blue-50 shadow-lg mr-4"
                />
              </div>
              <div>
                <div className="text-2xl font-extrabold "></div>
                <div className="font-light mb-2 md:mb-0 w-full">
                  <div className="mb-2">
                    <input
                      placeholder="Enter your name"
                      className="w-full"
                      value={name}
                    />
                  </div>
                  <div>
                    <textarea
                      value={profile?.professional_bio}
                      onChange={handleOnUpdate}
                      name="professional_bio"
                      rows={4}
                      cols={12}
                      className="w-full rounded-md border-none focus:border-blue-300 focus:ring-blue-300 overflow-hidden"
                      placeholder="Enter a brief information about yourself as 'A Game programmer from Spain with special interest in character development'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of top section  */}
          <div className="md:flex md:flex-row justify-between p-2 ">
            <div className="md:w-1/2 md:mr-4 bg-blue-50 p-2 rounded-md">
              <div className="border-b-gray-200 border-2 border-blue-50">
                <h2 className="text-lg font-bold  ">About Me</h2>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleOnUpdate}
                  rows={4}
                  className="w-full rounded-md border-none focus:border-blue-300 focus:ring-blue-300"
                  placeholder="Tell us more about yourself"
                />
              </div>
              <div className="mt-2 border-2 border-b-gray-200  border-blue-50">
                <h3 className="text-lg font-bold  ">Experience</h3>
                <textarea
                  name="experience"
                  value={profile.experience}
                  onChange={handleOnUpdate}
                  rows={4}
                  className="w-full rounded-md border-none focus:border-blue-300 focus:ring-blue-300"
                  placeholder="List some of your outstanding experience"
                />
              </div>
            </div>
            {/* Another padding  */}
            <div className="md:w-1/2 p-2 bg-blue-50 rounded-md">
              <div className="border-2 border-b-gray-200  border-blue-50">
                <div className="border-2 border-b-gray-200  border-blue-50 pb-4">
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <textarea
                    value={profile.skill}
                    name="skill"
                    onChange={handleOnUpdate}
                    rows={4}
                    className="w-full rounded-md border-none focus:border-blue-300 focus:ring-blue-300"
                    placeholder="List your skills followed by a comma for example: java, sql, php"
                  />
                </div>
                <div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg ">Location</h3>
                    <input
                      name="location"
                      placeholder="Enter your Location"
                      className="w-full rounded-md"
                      onChange={handleOnUpdate}
                      value={profile.location}
                    />
                  </div>
                  <div className="border-2 border-b-gray-200  border-blue-50">
                    <h3 className="text-lg ">Github</h3>
                    <div className="flex flex-row items-center font-semibold">
                      <div>
                        <input
                          name="github"
                          placeholder="Enter your Github Url"
                          className="w-full rounded-md"
                          onChange={handleOnUpdate}
                          value={profile.github}
                        />
                      </div>
                      <div>
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-b-gray-200 border-blue-50">
                    <h3 className="text-lg">Twitter</h3>
                    <div className="flex flex-row items-center font-semibold">
                      <div>
                        <input
                          name="twitter"
                          placeholder="Enter your twitter handle"
                          className="w-full rounded-md"
                          value={profile.twitter}
                          onChange={handleOnUpdate}
                        />
                      </div>
                      <div>
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-b-gray-200 border-blue-50">
                    <h3 className="text-lg">Email</h3>
                    <div className="flex flex-row items-center font-semibold">
                      <div>
                        <input
                          placeholder="Enter your twitter handle"
                          className="w-full rounded-md"
                          value={email}
                        />
                      </div>
                      <div>
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center pt-2 w-max justify-center">
                    <div className="items-center">
                      <button className="btn border-2 border-black font-bold mr-2 bg-white mb-2">
                        Update
                      </button>
                    </div>
                    <div className="items-center">
                      <button className="btn bg-red-600 text-white font-bold px-12">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createProfile;
