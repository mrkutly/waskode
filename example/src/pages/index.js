import React from "react"
import { ThemeProvider, createGlobalStyles } from 'wasknode'
import { SmallButton, LargeButton, PrimaryButton, SecondaryButton, TertiaryButton } from 'wasknode/dist/buttons'
import { EmailInput, TextInput, PasswordInput } from 'wasknode/dist/inputs';
import { Form } from 'wasknode/dist/forms';
import { defaultTheme } from 'wasknode/dist/themes';

const GlobalStyle = createGlobalStyles(defaultTheme);

export default () => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={defaultTheme}>
			<main>
				<h1>My Components</h1>
				<h2>Buttons</h2>
				<p>these are some buttons</p>
				<div style={{margin: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
					<SmallButton>Small Button</SmallButton>
					<LargeButton>Large Button</LargeButton>
					<PrimaryButton>Primary Button</PrimaryButton>
					<SecondaryButton>Secondary Button</SecondaryButton>
					<TertiaryButton>Tertiary Button</TertiaryButton>
				</div>
				<h2>Form</h2>
				<p>here is a form</p>
				<Form>
					<EmailInput value="hello@mark.com" setValue={() => {}} validationError="not a good email" />
					<TextInput label="Name:" name="name" value="Mark Sauer-Utley" setValue={() => {}} validationError="not a good name" />
					<PasswordInput value="hello@mark.com" setValue={() => {}} validationError="not a good password" />
					<PrimaryButton>Sign up</PrimaryButton>
				</Form>
			</main>
		</ThemeProvider>
	</>
)
