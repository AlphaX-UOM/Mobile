import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import { useSpring, animated, config } from '@react-spring/native';
import BezierEasing from 'bezier-easing';

const propTypes = {
  children: PropTypes.node,
  contentHeight: PropTypes.number,
  defaultCollapsed: PropTypes.bool,
  style: PropTypes.any,
  title: PropTypes.string,
  useBezier: PropTypes.bool,
};

const defaultProps = {
  contentHeight: 300,
};

function CollapsibleCard1({
  children,
  contentHeight,
  defaultCollapsed,
  style,
  title,
  useBezier,
  ...props
}) {
  const [isCollapsed, setCollapsed] = useState(
    defaultCollapsed ? defaultCollapsed : true
  );

  const animationConfig = {
    height: isCollapsed ? 0 : contentHeight,
    progress: isCollapsed ? 0 : 100,
    rotation: isCollapsed ? `0deg` : `-180deg`,
    // config: config.stiff,
  };

  if (useBezier) {
    animationConfig.config = {
      duration: 600,
      easing: t => BezierEasing(0.25, 0, 0, 1)(t),
    };
  }

  const animation = useSpring(animationConfig);
  const AnimatedView = animated(View);

  return (
    <View {...props} style={[styles.card, style]}>
      {/* Card Top */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setCollapsed(c => !c)}
        style={styles.cardTop}>
        <View style={styles. addpadding}>
        <Text style={{color:'white'}}>{title}</Text>
        </View>
        <AnimatedView style={{ transform: [{ rotate: animation.rotation }] }}>
        {/* <MaterialCommunityIcons
                    name="chevron-down"
                    color={'black'}
                    size={30}
                   
                    /> */}
        </AnimatedView>
      </TouchableOpacity>

      {/* Card Content */}
      <AnimatedView
        style={[
          styles.cardContent,
          {
            height: animation.height,
            borderTopWidth: animation.progress.interpolate({
              range: [0, 25, 50, 75, 100],
              output: [0, 0, 0, 0, 1],
            }),
            opacity: animation.progress.interpolate({
              range: [0, 85, 95, 100],
              output: [0, 0, 0.5, 1],
            }),
          },
        ]}>
        {/* Inner */}
        <AnimatedView
          style={{
            transform: [
              {
                translateY: animation.progress.interpolate({
                  range: [0, 85, 95, 100],
                  output: [7.5, 5, 2.5, 0],
                }),
              },
            ],
          }}>
          {children}
        </AnimatedView>
      </AnimatedView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  cardContent: {
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  addpadding: {
    backgroundColor: '#28d448',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 1,
    paddingHorizontal: 60,
    padding:10,
  }
});

CollapsibleCard1.propTypes = propTypes;
CollapsibleCard1.defaultProps = defaultProps;

export default CollapsibleCard1;