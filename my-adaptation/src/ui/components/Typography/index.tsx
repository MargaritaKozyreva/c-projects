import React from 'react';
import { Heading, Props as HeadingProps } from './Heading';
import { Text, Props as TextProps } from './Text';

export const H1: React.FC<HeadingProps> = (props) => <Heading type="h1" weight="bold" { ...props } />;
export const H2: React.FC<HeadingProps> = (props) => <Heading type="h2" weight="bold" { ...props } />;
export const H3: React.FC<HeadingProps> = (props) => <Heading type="h3" weight="bold" { ...props } />;
export const H4: React.FC<HeadingProps> = (props) => <Heading type="h4" weight="bold" { ...props } />;
export const H5: React.FC<HeadingProps> = (props) => <Heading type="h5" weight="bold" { ...props } />;
export const H6: React.FC<HeadingProps> = (props) => <Heading type="h6" weight="bold" { ...props } />;

export const P: React.FC<TextProps> = (props: TextProps) => <Text type="p" size="m" { ...props } />;
export const Span: React.FC<TextProps> = (props) => <Text type="span" size="m" { ...props } />;
