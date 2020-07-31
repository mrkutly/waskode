import React from "react"
import { 
	createGlobalStyles,
	directions,
	EmailInput, 
	Form,
	LargeButton, 
	Link,
	PasswordInput,
	PrimaryButton, 
	SecondaryButton, 
	SmallButton, 
	TertiaryButton, 
	TextInput, 
	TextArea, 
	ThemeProvider, 
} from 'waskode'

const GlobalStyle = createGlobalStyles(directions);

export default () => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={directions}>
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
					<EmailInput value="hello@mark.com" onChange={() => {}} validationError="not a good email" />
					<TextInput label="Name:" name="name" value="Mark Sauer-Utley" onChange={() => {}} validationError="not a good name" />
					<PasswordInput value="hello@mark.com" onChange={() => { }} validationError="not a good password" />
					<TextArea value="this is my sick text area isn't it nice?" onChange={() => { }} validationError="not a good password" />
					<PrimaryButton>Sign up</PrimaryButton>
				</Form>
				<p><Link tabIndex={0} href="/">this is a link</Link> and this is not</p>
			</main>
		</ThemeProvider>
	</>
)
