import SignInButton from "../_components/SignInButton";

export const metadata = {
	title: "Login",
};

export default function Page() {
	return (
		<div className="flex flex-col gap-10 mt-10 items-center">
			<h2 className="text-3xl font-semibold">Sign in to access your guest area</h2>
			<SignInButton />
		</div>
	);
}

/* Note!
  This entire flow is gonna stay on the server, so this SignInButton cannot be a client component.
  And so since this is a server component, we actually cannot do on this button like this.
  So we cannot use the onClick because we cannot have any interactivity in a server component.
  So instead, what we need to do is to create a server action.
  Basically they allow us to add interactivity also to server components, and usually to forms.
  So the idea is to connect a server action with a form. And then in this case, all that form will contain is this
  button. So then once we click that button, the form will be submitted.
*/
