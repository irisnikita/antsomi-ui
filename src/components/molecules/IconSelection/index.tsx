/* eslint-disable react/destructuring-assignment */
// Libraries
import React, { useState, useEffect } from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Atoms
import { Button, Icon, ScrollBox } from 'src/components/atoms';

// Molecules
import { Modal, InputSearch } from 'src/components/molecules';

// Constants
import { FONTAWESOME_ICONS, LIMIT_ICONS_SHOW } from './constants';
import { THEME } from 'src/constants';

// Styled
import {
  CustomButton,
  IconSelectionWrapper,
  Overlay,
  WrapperListItemRender,
  WrapperListRender,
} from './styled';

interface IconSelectionProps {
  onChange?: Function;
  onRemoveIcon?: Function;
  icon?: string;
  isOpen?: boolean;
}

export const IconSelection: React.FC<IconSelectionProps> = props => {
  const { onChange, onRemoveIcon, isOpen } = props;

  const [selectedIcon, setSelectedIcon] = useState(props.icon || '');
  const [isModalVisible, setIsModalVisible] = useState(isOpen);
  const [listIcons, setListIcons] = useState(FONTAWESOME_ICONS.slice(0, LIMIT_ICONS_SHOW));

  useEffect(() => {
    if (props.icon !== selectedIcon) {
      setSelectedIcon(props.icon || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.icon]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSelectIcon = icon => {
    if (typeof onChange === 'function') {
      onChange(icon);
    }
    setSelectedIcon(icon);
    handleCancel();
  };

  const renderFontawesome = (iconName: string, fontSize = 40) =>
    iconName ? (
      <FontAwesomeIcon
        icon={iconName.split(' ') as [IconPrefix, IconName]}
        size="lg"
        style={{
          fontSize,
          zIndex: 1,
          color: THEME.token?.colorIcon,
        }}
      />
    ) : null;

  const renderListIcons = listIconsRender =>
    listIconsRender.map(iconName =>
      iconName ? (
        <WrapperListRender className="ants-group" key={iconName}>
          <WrapperListItemRender className="ants-hover">
            {renderFontawesome(iconName)}
            <CustomButton onClick={() => handleSelectIcon(iconName)} className="group-hover">
              USE
            </CustomButton>
            <Overlay className="group-hover" />
          </WrapperListItemRender>
          <span
            style={{
              display: 'inline-block',
              marginTop: 5,
              width: '100%',
              fontSize: `${THEME.token?.fontSize}px`,
            }}
          >
            {iconName.split(' ')[1]}
          </span>
        </WrapperListRender>
      ) : null,
    );

  const handleSeachIcons = e => {
    const { value } = e.target;

    if (value && value.trim()) {
      setListIcons(
        FONTAWESOME_ICONS.filter(item =>
          item?.split(' ')[1].toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()),
        ).slice(0, LIMIT_ICONS_SHOW),
      );
    } else {
      setListIcons(FONTAWESOME_ICONS.slice(0, LIMIT_ICONS_SHOW));
    }
  };

  const handleRemoveIcon = () => {
    if (onRemoveIcon) {
      onRemoveIcon();
    }
    if (typeof onChange === 'function') {
      onChange('');
    }
    setSelectedIcon('');
  };

  return (
    <IconSelectionWrapper>
      <div className="transparent-wrapper">
        <div style={{ position: 'absolute', zIndex: 0 }}>
          {renderFontawesome(selectedIcon, 114)}
        </div>

        {selectedIcon ? (
          <>
            <Button onClick={showModal} style={{ backgroundColor: '#ffffff' }}>
              Change
            </Button>
            <Button onClick={handleRemoveIcon} style={{ backgroundColor: '#ffffff' }}>
              <Icon
                type="icon-ants-remove-trash"
                size={15}
                style={{ color: THEME.token?.colorPrimary }}
              />
            </Button>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              color: THEME.token?.colorIcon,
            }}
          >
            <Icon type="icon-ants-star" size={30} />
            <Button onClick={showModal} style={{ backgroundColor: '#ffffff' }}>
              Select an icon
            </Button>
          </div>
        )}
      </div>
      <Modal
        wrapClassName="icons-selection-modal"
        title={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Icon type="icon-ants-emoji" size={20} />
            Icon Selection
          </div>
        }
        headerStyle={{
          padding: '20px 20px 0',
          border: 'none',
        }}
        bodyStyle={{
          padding: '17px 20px 20px',
          width: 'fit-content',
        }}
        width="fit-content"
        footer={null}
        destroyOnClose
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <InputSearch
          style={{ width: 232 }}
          onChange={handleSeachIcons}
          placeholder="Search for icon..."
        />
        <div style={{ paddingTop: 28, width: 650 }}>
          <ScrollBox height={460} style={{ display: 'flex', flexWrap: 'wrap', gap: '35px' }}>
            {renderListIcons(listIcons)}
          </ScrollBox>
        </div>
      </Modal>
    </IconSelectionWrapper>
  );
};
