// Define a recursive type for JSON-like structures
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Define the Database schema
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
        }
        Relationships: {
          foreignKeyName: "users_id_fkey"
          columns: ["id"]
          referencedRelation: "users"
          referencedColumns: ["id"]
        }[]
      }
      youtube_content_generator: {
        Row: {
          created_at: string
          generated_content: Json | null
          id: string
          language: string | null
          summary: string | null
          transcription: string
          url: string
          user_id: string
          youtube_title: string
        }
        Insert: {
          created_at?: string
          generated_content?: Json | null
          id?: string
          language?: string | null
          summary?: string | null
          transcription: string
          url: string
          user_id: string
          youtube_title: string
        }
        Update: {
          created_at?: string
          generated_content?: Json | null
          id?: string
          language?: string | null
          summary?: string | null
          transcription?: string
          url?: string
          user_id?: string
          youtube_title?: string
        }
        Relationships: {
          foreignKeyName: "youtube_content_generator_user_id_fkey"
          columns: ["user_id"]
          referencedRelation: "users"
          referencedColumns: ["id"]
        }[]
      }
    }
    Views: Record<string, never> // Empty Views object
    Functions: Record<string, never> // Empty Functions object
    Enums: Record<string, never> // Empty Enums object
    CompositeTypes: Record<string, never> // Empty CompositeTypes object
  }
}

// Public Schema for convenience
type PublicSchema = Database["public"]

// Generic type to get rows for tables
export type Tables<
  TableName extends keyof PublicSchema["Tables"]
> = PublicSchema["Tables"][TableName]["Row"]

// Generic type to get insertable rows for tables
export type TablesInsert<
  TableName extends keyof PublicSchema["Tables"]
> = PublicSchema["Tables"][TableName]["Insert"]

// Generic type to get updatable rows for tables
export type TablesUpdate<
  TableName extends keyof PublicSchema["Tables"]
> = PublicSchema["Tables"][TableName]["Update"]

// Generic type to access Enums
export type Enums<
  EnumName extends keyof PublicSchema["Enums"]
> = PublicSchema["Enums"][EnumName]
