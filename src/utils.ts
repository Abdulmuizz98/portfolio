import { bio, education, funFacts } from "./Data";
import { InfoOrUndf } from "./components/types";

export const sendEmail = async (client, emailPayload) => {
  const serviceId = "service_rjuiom7";
  const templateId = "template_yod4kk5";

  await client.send(serviceId, templateId, emailPayload);
};

export const formatedDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentDate = new Date();

  return `${days[currentDate.getUTCDay()]} ${currentDate.getUTCDate()} ${
    months[currentDate.getUTCMonth()]
  }`;
};

export const getInfoSet = (highlight: string) => {
  let info: InfoOrUndf;

  info = bio.payload.find((info) => info.highlight === highlight);
  if (info) return { info, sectionName: bio.name };

  info = education.payload.find((info) => info.highlight === highlight);
  if (info) return { info, sectionName: education.name };

  info = funFacts.payload.find((info) => info.highlight === highlight);
  if (info) return { info, sectionName: funFacts.name };

  return { info, sectionName: "" };
};
