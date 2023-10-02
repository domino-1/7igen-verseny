'use client'
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import styles from './dropdown.module.css'
import DropdownItem from './dropdown-item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

//floating ui
import { useState, useTransition } from 'react';
import { FloatingFocusManager } from '@floating-ui/react';
import { useFloating, autoUpdate, offset, flip, shift, 
    useClick, useDismiss, useRole, useInteractions, useTransitionStatus } from '@floating-ui/react';

export default function Dropdown({ title, items, rootTarget }) {
    const [isOpen, setIsOpen] = useState(false);

    const {refs, floatingStyles, context} = useFloating({
        open: isOpen,
        placement: 'bottom-start',
        onOpenChange: setIsOpen,
        middleware: [offset(24.8), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    //const {isMounted, transitionStatus} = useTransitionStatus(context, { duration: 250 })
 
    // Merge all the interactions into prop getters
    const {getReferenceProps, getFloatingProps} = useInteractions([
        click,
        dismiss,
        role
    ]);
    
    return (<>
        <button className={styles.trigger} ref={refs.setReference} {...getReferenceProps()}>
            { (items !== undefined && items.length > 0) ? title : <Link href={rootTarget}>{title}</Link> }
            &nbsp;{ (items !== undefined && items.length > 0) ? <FontAwesomeIcon icon={faCaretDown} size="xs" /> : null }
        </button>
        {(items !== undefined && items.length > 0) && isOpen && (
            <FloatingFocusManager context={context} modal={false}>
            <div /*data-status={transitionStatus}*/ className={`${styles.panel} floating`}
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
            >
                <div className={styles.panelMain}>
                    {items.map( item => {
                        return <DropdownItem target={item.target} name={item.name} description={item.description} />
                    })}
                </div>
                <div className={styles.panelAux}>
                    <span>Lorem ipsum dolor sit amer consequitor</span>
                </div>
            </div>
            </FloatingFocusManager>
        )}
    </>)
}