import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

/* Environment Variables
  There are simply some variables that we can set up and that are available just to the Node.js environment
  in which the application is running.
  And we usually place them in a separate file => .env.local => and then Next.js will load that file
  and grab the variables from there and make them available on a special process variable.

  We will store this Supabase URL and the key because Next.js actually comes with built and support for environment variables.
  */
