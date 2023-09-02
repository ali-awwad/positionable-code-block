import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';

export default function edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title="Settings">
                    <SelectControl
                        label="Location"
                        value={attributes.location}
                        onChange={(location) => setAttributes({ location })}
                        options={[
                            { label: 'Head', value: 'head' },
                            { label: 'Body', value: 'body' },
                            { label: 'Footer', value: 'footer' },
                        ]}
                    />
                    <RangeControl
                        label="Priority"
                        value={attributes.priority}
                        onChange={(priority) => setAttributes({ priority })}
                        min={1}
                        max={10}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <InnerBlocks
                    allowedBlocks={['core/html']}
                    template={[
                        ['core/html', { content: '' }],
                    ]}
                />
            </div>
        </>
    )
}
