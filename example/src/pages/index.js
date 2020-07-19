import React from "react"
import { ThemeProvider, GlobalStyle } from 'wasknode'
import { SmallButton, LargeButton, PrimaryButton, SecondaryButton, TertiaryButton } from 'wasknode/dist/buttons'
import EmailInput from 'wasknode/dist/inputs/Email';
import TextInput from 'wasknode/dist/inputs/Text';
import PasswordInput from 'wasknode/dist/inputs/Password';
import { defaultTheme } from 'wasknode/dist/themes';
import "wasknode/dist/fonts/raleway.ttf"

console.log(defaultTheme) 

export default () => (
	<>
		<GlobalStyle />
			<ThemeProvider theme={defaultTheme}>
				<div style={{margin: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
					<EmailInput value="hello@mark.com" setValue={() => {}} validationError="not a good email" />
					<TextInput label="Name:" name="name" value="Mark Sauer-Utley" setValue={() => {}} validationError="not a good name" />
					<PasswordInput value="hello@mark.com" setValue={() => {}} validationError="not a good password" />
				</div>

		</ThemeProvider>
	</>
)
