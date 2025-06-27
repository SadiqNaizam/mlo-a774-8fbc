import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Validation Schema
const formSchema = z.object({
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // Set error on confirmPassword field
});

type FormValues = z.infer<typeof formSchema>;

const ResetPasswordPage = () => {
  console.log('ResetPasswordPage loaded');
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real application, you would make an API call here.
    console.log('Password reset data:', data);

    toast.success('Your password has been reset successfully!');
    
    // Redirect to login page after a short delay
    setTimeout(() => {
      navigate('/'); // Navigate to the login page, which is at the root path "/"
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={false} />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Reset Your Password"
          description="Enter a new password for your account."
          footerContent={
            <>
              Remember your password?{' '}
              <Link to="/" className="text-primary hover:underline font-medium">
                Back to Login
              </Link>
            </>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Resetting...' : 'Set New Password'}
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;