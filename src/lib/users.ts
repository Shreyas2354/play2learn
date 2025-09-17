
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
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : {};
}

// Helper function to save users to localStorage
function saveUsers(users: any) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('users', JSON.stringify(users));
}

// Signup function
export function signup(username: string, password: string, role: 'student' | 'teacher'): User {
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
  const users = getUsers();
  const user = users[username];

  if (user && user.password === password) {
    const currentUser: User = { username, role: user.role };
    if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
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
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

// Get all students for the teacher dashboard
export function getStudents(): User[] {
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
