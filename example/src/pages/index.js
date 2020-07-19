import React from "react"
import { ThemeProvider, GlobalStyle } from 'wasknode'
import { SmallButton, LargeButton, PrimaryButton, SecondaryButton, TertiaryButton } from 'wasknode/dist/buttons'
import { defaultTheme } from 'wasknode/dist/themes';
import "wasknode/dist/fonts/raleway.ttf"

console.log(defaultTheme) 

export default () => (
	<>
		<GlobalStyle />
			<ThemeProvider theme={defaultTheme}>
				<div style={{margin: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
					<PrimaryButton>Submit</PrimaryButton>
					<SecondaryButton>Submit</SecondaryButton>
					<TertiaryButton>Submit</TertiaryButton>
					<LargeButton>Submit</LargeButton>
					<SmallButton>Submit</SmallButton>
				</div>
		</ThemeProvider>
	</>
)
