import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthFormWrapperProps {
  /** The main content of the form (e.g., input fields and submit button). */
  children: React.ReactNode;
  /** The title displayed at the top of the form. */
  title: string;
  /** An optional subtitle or description displayed below the title. */
  description?: string;
  /** The content to be displayed in the footer, typically for navigational links. */
  footerContent: React.ReactNode;
}

/**
 * A wrapper component that provides a consistent layout for authentication forms.
 * It uses a Card structure to house a title, description, form content, and footer links.
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  children,
  title,
  description,
  footerContent,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-sm text-muted-foreground">
          {footerContent}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;