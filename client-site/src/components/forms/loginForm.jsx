import React from 'react';
import Input from '../inputs/index';
import Button from '../buttons/index';
import LinkButton from '../buttons/linkButton';

const LoginForm = ({ formType }) => {
  return (
    <form className="space-y-6">
      {formType === 'login' ? (
        <>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            required={true}
            autoComplete="email"
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            autoComplete="current-password"
          />
          <Button type="submit">
            Sign in
          </Button>
          <div className="text-center mt-4">
            <LinkButton to="/forgot-password">
              Forgot your password?
            </LinkButton>
          </div>
        </>
      ) : (
        <>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            required={true}
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            required={true}
            autoComplete="email"
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required={true}
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            autoComplete="new-password"
          />
          <Button type="submit">
            Register
          </Button>
        </>
      )}
    </form>
  );
};

export default LoginForm;