// IDK why would I need an API for this project.
// Create simple API to demonstrate how to call API from frontend.
export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `${req.method} allowed` });
    return;
  }

  // Assuming that this information was read from the DB.
  const skills = ["Python", "AWS", "Linux", "Docker", "Jenkins", "Terraform", "HTML", "CSS", "JavaScript", "Git", "GitHub", "MongoDB", "SQL", "Japanese Language", "Security", "CTFs", "VBScript", "Bash", "Networking", "React", "Bootstrap"];
  res.status(200).json({ skills });
}
