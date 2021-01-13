import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('translate-it.translateIt', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const selection = editor.selection;
		let text = editor.document.getText(selection);
		if (text) {
			vscode.env.openExternal(vscode.Uri.parse(`https://translate.google.com.hk/?sl=en&tl=zh-CN&text=${replaceUpper(text)}&op=translate`));
		} else {
			vscode.window.showWarningMessage('input text is null');
		}
	});


	context.subscriptions.push(disposable);
}

export function deactivate() {}

function replaceUpper(text: string): string {
	let str = text;
	return str.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}