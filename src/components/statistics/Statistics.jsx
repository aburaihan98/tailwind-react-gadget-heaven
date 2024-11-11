import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ReuseBanner from "../reuse/ReuseBanner";

export default function Statistics() {
  const data = useLoaderData();

  return (
    <>
      {
        <Helmet>
          <title>Statistics : Gadget Heaven </title>
        </Helmet>
      }
      <div className="bg-[#f7f7f7]">
        <ReuseBanner
          title={"Statistics"}
          description={
            <>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to{" "}
              <br className=" hidden lg:block" /> the coolest accessories, we
              have it all!
            </>
          }
        />
        <div className="w-11/12 m-auto pt-12 ">
          <h2 className="font-bold text-2xl  mb-8">Statistics</h2>
        </div>
        <div className="w-11/12 m-auto bg-white p-10 mb-20 rounded-2xl">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="price" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" />
              <Bar dataKey="rating" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
