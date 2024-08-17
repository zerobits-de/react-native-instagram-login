declare module 'react-native-instagram-login' {
  import * as React from 'react'
  import { StyleProp, ViewStyle, ImageStyle } from 'react-native';
  
  interface InstagramLoginProps {
      appId: string;
      appSecret?: string;
      redirectUrl: string;
      scopes?: string[];
      onLoginSuccess: (token: string, results: any) => void;
      modalVisible?: boolean;
      onLoginFailure?: (error: any) => void;
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
  
  export default class InstagramLogin extends React.Component<InstagramLoginProps> {}
}
