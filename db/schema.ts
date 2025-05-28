// schema.ts
import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  array,
} from "drizzle-orm/pg-core";

// 1. Projects
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
  tags: array(varchar("tag", { length: 50 })).default([]), // PostgreSQL arrays
  createdAt: timestamp("created_at").defaultNow(),
});

// 2. Services
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  iconUrl: text("icon_url"),
  link: text("link"),
  createdAt: timestamp("created_at").defaultNow(),
});

// 3. Stats
export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  label: varchar("label", { length: 255 }).notNull(),
  value: integer("value").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// 4. Skills
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  skillName: varchar("skill_name", { length: 100 }).notNull(),
  category: varchar("category", { length: 100 }), // Frontend, Backend, etc.
  color: varchar("color", { length: 20 }), // optional color code
  createdAt: timestamp("created_at").defaultNow(),
});
