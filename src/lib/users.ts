
'use client';

export type User = {
  username: string;
  role: 'student' | 'teacher';
  // Optional student-specific properties
  points?: number;
  badges?: string[];
  level?: number;
};

// Helper function to get users from localStorage
function getUsers() {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  } catch (error) {
    console.error("Failed to parse users from localStorage", error);
    return {};
  }
}

// Helper function to save users to localStorage
function saveUsers(users: any) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error("Failed to save users to localStorage", error);
  }
}

// Signup function
export function signup(username: string, password: string, role: 'student' | 'teacher'): User {
  if (typeof window === 'undefined') {
    // This case should ideally not be hit if called from a client component form
    throw new Error('Signup can only be performed on the client.');
  }
  const users = getUsers();

  if (users[username]) {
    throw new Error('Username already exists. Try another one.');
  }

  const newUser: any = {
    password, // In a real app, this should be hashed!
    role,
  };

  if (role === 'student') {
    newUser.points = 0;
    newUser.badges = [];
    newUser.level = 1;
  }

  users[username] = newUser;
  saveUsers(users);

  return { username, role };
}

// Login function
export function login(username: string, password: string): User | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const users = getUsers();
  const user = users[username];

  if (user && user.password === password) {
    const currentUser: User = { username, role: user.role };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return currentUser;
  }

  return null;
}

// Logout function
export function logout() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('currentUser');
}

// Get current user function
export function getCurrentUser(): User | null {
    if (typeof window === 'undefined') {
        return null;
    }
    try {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error("Failed to parse current user from localStorage", error);
        return null;
    }
}

// Get all students for the teacher dashboard
export function getStudents(): User[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const users = getUsers();
  const students: User[] = [];
  for (const username in users) {
    if (users[username].role === 'student') {
      students.push({
        username,
        role: 'student',
        ...users[username]
      });
    }
  }
  return students;
}
