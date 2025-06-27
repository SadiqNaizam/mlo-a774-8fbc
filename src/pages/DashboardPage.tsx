import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { LogOut } from 'lucide-react';

// Custom Layout Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Shadcn UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  useEffect(() => {
    toast.success('Login Successful!', {
      description: 'Welcome to your dashboard.',
    });
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    // In a real app, you would clear the user's token or session here.
    toast.info('You have been logged out.');
    navigate('/'); // Navigate to LoginPage as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header isAuthenticated={true} />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>
              You have successfully logged in. This is your personal dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-sm text-muted-foreground">
              All systems are operational.
            </p>
            <Button onClick={handleLogout} className="w-full max-w-xs">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;