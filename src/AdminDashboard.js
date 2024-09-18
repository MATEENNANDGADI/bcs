import React, { useEffect, useState } from 'react';
import { auth, db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function AdminDashboard() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserRole(docSnap.data().role); // Check user role
        }
      }
    };

    fetchUserRole();
  }, []);

  if (userRole !== 'admin') {
    return <div>You do not have permission to view this page.</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Admin dashboard content */}
    </div>
  );
}

export default AdminDashboard;
