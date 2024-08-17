declare module 'react-native-instagram-login' {
  import * as React from 'react'
  import { StyleProp, ViewStyle, ImageStyle } from 'react-native';
  
  interface InstagramLoginProps {
    ref: React.RefObject<any>
    appId: string;
    appSecret?: string;
    redirectUrl: string;
    scopes?: string[];
    onLoginSuccess?: (data?: { access_token: string; user_id: number }) => void
    onLoginFailure?: (error: string) => void
    modalVisible?: boolean;
    responseType?: string;
    containerStyle?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    closeStyle?: StyleProp<ViewStyle>;
    renderClose?: () => React.ReactNode;
    onClose?: () => void;
    styles?: {
      webView?: StyleProp<ViewStyle>;
    };
    language?: string;
    incognito?: boolean;
  }

  interface InstagramState {
    modalVisible: boolean;
    key: number;
  }
  
  export default class InstagramLogin extends React.Component<InstagramLoginProps, InstagramState> {
    constructor(props: InstagramLoginProps);
    show(): void;
    hide(): void;
  }
}
