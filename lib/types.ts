export type Role = "admin" | "member";

export type Profile = {
  id: string;
  full_name: string;
  department: string | null;
  role: Role;
};

export type WeeklyReport = {
  id: string;
  user_id: string;
  week_start: string;
  achievements: string;
  plans: string;
  blockers: string | null;
  status: "draft" | "submitted" | "reviewed";
  created_at: string;
  updated_at: string;
  profiles?: Pick<Profile, "full_name" | "department">;
};
