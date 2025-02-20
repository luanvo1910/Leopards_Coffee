import React from 'react';
import Input from '../inputs/LoginInput';
import Button from '../buttons/Button';
import LinkButton from '../buttons/LinkButton';

const LoginForm = ({ formType, setFormType }) => {
  return (
    <form className="space-y-6">
      {formType === 'login' ? (
        <>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            required
            autoComplete="email"
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
          <Button type="submit">Sign in</Button>
          <div className="text-center mt-4">
            <LinkButton onClick={() => setFormType("forgot-password")}>
              Forgot your password?
            </LinkButton>
          </div>
        </>
      ) : formType === 'register' ? (
        <>
          <Input id="name" name="name" type="text" placeholder="Full Name" required />
          <Input id="email" name="email" type="email" placeholder="Email address" required autoComplete="email" />
          <Input id="phone" name="phone" type="tel" placeholder="Phone Number" required />
          <Input id="password" name="password" type="password" placeholder="Password" required autoComplete="new-password" />
          <Button type="submit">Register</Button>
        </>
      ) : (
        <>
          <Input id="email" name="email" type="email" placeholder="Enter your email" required autoComplete="email" />
          <Button type="submit">Send Email</Button>
          <div className="text-center mt-4">
            <LinkButton onClick={() => setFormType("login")}>
              Back to Login
            </LinkButton>
          </div>
        </>
      )}
    </form>
  );
};

export default LoginForm;
