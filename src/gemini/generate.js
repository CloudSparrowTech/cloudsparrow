import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../config/config";

const generateDummyData = async (type, remarks = "thanks") => {
  (config.geminiApiKey);

  const genAI = new GoogleGenerativeAI(config.geminiApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const prompt = `
      Generate dummy data in JSON format for an ${type} proposal with the following structure:
      {
        "introduction":"",
        "projectScope": [{ "title": "", "content": ["", "", ""] }],
        "techStack": [{ "title": "", "content": "" }],
        "timeline": [{ "phase": "", "duration": "", "deliverables": "" }],
        "costs": [{ "component": "", "cost": "" }],
        "conclusion":""
      }
      Provide realistic values related to ${type} development. Return the JSON string directly without additional formatting like code blocks.
      and plzz dont use any symbol that occur error in parsing the data in js and ${remarks}
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Parse the JSON response directly (assuming Gemini returns valid JSON)
    const generatedData = JSON.parse(responseText);

    return generatedData;
  } catch (error) {
    console.error("Failed to generate dummy data:", error);
    return {
      introduction: "",
      conclusion: "",
      projectScope: [
        {
          title: "User Roles",
          content: [
            "Student: Access courses and take quizzes",
            "Instructor: Manage course content",
            "Admin: Oversee platform operations",
          ],
        },
        {
          title: "Features",
          content: [
            "Course enrollment",
            "Live class streaming",
            "Progress tracking",
          ],
        },
      ],
      techStack: [
        { title: "Frontend", content: "React.js" },
        { title: "Backend", content: "Node.js" },
      ],
      timeline: [
        {
          phase: "Planning",
          duration: "5 days",
          deliverables: "Project plan and wireframes",
        },
      ],
      costs: [{ component: "Development", cost: "10000" }],
    };
  }
};

export default generateDummyData;
