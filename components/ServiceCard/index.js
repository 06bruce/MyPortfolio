import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const defaultDescription = `Nshuti Bruce is a results-driven full-stack software developer with hands-on experience in building secure, scalable applications using technologies like Laravel, React, Node.js, MongoDB, and FastAPI. He has contributed to projects ranging from military registration systems and IoT solutions to authentication platforms and responsive user dashboards.

Bruce is known for his consistent performance, attention to detail, and strong integrity. He approaches every task with professionalism and a deep sense of responsibility—delivering clean code, respecting deadlines, and maintaining high ethical standards in both solo and team settings.

With a solid foundation in cybersecurity, web development, and backend engineering, Bruce continues to grow as a trustworthy and capable developer who brings value, security, and honesty to every project.`;

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name || "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description || defaultDescription}
      </p>
    </div>
  );
};

export default ServiceCard;
