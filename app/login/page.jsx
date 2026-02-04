"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignup) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/login`,
          },
        });

        if (error) throw error;

        alert("Check your email to verify your account");
        return; // ⛔ stop here, don't auto-login
      }

      // LOGIN
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/"); // success login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>{isSignup ? "Create Account" : "Login"}</h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
        </button>

        <p style={styles.toggle} onClick={() => setIsSignup(!isSignup)}>
          {isSignup
            ? "Already have an account? Login"
            : "New user? Create account"}
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: 320,
    padding: 24,
    border: "1px solid #ddd",
    borderRadius: 8,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    padding: 10,
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: 14,
  },
  toggle: {
    marginTop: 12,
    textAlign: "center",
    cursor: "pointer",
    color: "blue",
  },
};
