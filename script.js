
$(document).ready(function() {
// Cache DOM elements
const $flexDemo = $('#flexDemo');
const $gridDemo = $('#gridDemo');

// Flexbox controls
const $flexDirection = $('#flexDirection');
const $justifyContent = $('#justifyContent');
const $alignItems = $('#alignItems');
const $flexWrap = $('#flexWrap');
const $addFlexItem = $('#addFlexItem');
const $removeFlexItem = $('#removeFlexItem');

// Grid controls
const $gridTemplateColumns = $('#gridTemplateColumns');
const $gridGap = $('#gridGap');
const $justifyItems = $('#justifyItems');
const $alignItemsGrid = $('#alignItemsGrid');
const $addGridItem = $('#addGridItem');
const $removeGridItem = $('#removeGridItem');

// Update Flexbox styles
function updateFlex() {
$flexDemo.css({
    'flex-direction': $flexDirection.val(),
    'justify-content': $justifyContent.val(),
    'align-items': $alignItems.val(),
    'flex-wrap': $flexWrap.val()
});
updateCode();
}

// Update Grid styles
function updateGrid() {
$gridDemo.css({
    'grid-template-columns': $gridTemplateColumns.val(),
    'gap': $gridGap.val(),
    'justify-items': $justifyItems.val(),
    'align-items': $alignItemsGrid.val()
});
updateCode();
}

// Update the displayed CSS code
function updateCode() {
// Get current Flexbox styles
const flexDirection = $flexDemo.css('flex-direction') || 'row';
const justifyContent = $flexDemo.css('justify-content') || 'flex-start';
const alignItems = $flexDemo.css('align-items') || 'stretch';
const flexWrap = $flexDemo.css('flex-wrap') || 'wrap';

// Update Flexbox code display
$('#flexCode').html(`
    <span class="code-line"><span class="code-selector">.flex-container</span> {</span>
    <span class="code-line">  <span class="code-property">display</span>: <span class="code-value">flex</span>;</span>
    <span class="code-line">  <span class="code-property">flex-direction</span>: <span class="code-value">${flexDirection}</span>;</span>
    <span class="code-line">  <span class="code-property">justify-content</span>: <span class="code-value">${justifyContent}</span>;</span>
    <span class="code-line">  <span class="code-property">align-items</span>: <span class="code-value">${alignItems}</span>;</span>
    <span class="code-line">  <span class="code-property">flex-wrap</span>: <span class="code-value">${flexWrap}</span>;</span>
    <span class="code-line">  <span class="code-property">gap</span>: <span class="code-value">0.5rem</span>;</span>
    <span class="code-line">}</span>
`);

// Get current Grid styles
const gridTemplateColumns = $gridDemo.css('grid-template-columns') || 'repeat(3, 1fr)';
const gap = $gridDemo.css('gap') || '0.5rem';
const justifyItems = $gridDemo.css('justify-items') || 'stretch';
const gridAlignItems = $gridDemo.css('align-items') || 'stretch';

// Update Grid code display
$('#gridCode').html(`
    <span class="code-line"><span class="code-selector">.grid-container</span> {</span>
    <span class="code-line">  <span class="code-property">display</span>: <span class="code-value">grid</span>;</span>
    <span class="code-line">  <span class="code-property">grid-template-columns</span>: <span class="code-value">${gridTemplateColumns}</span>;</span>
    <span class="code-line">  <span class="code-property">gap</span>: <span class="code-value">${gap}</span>;</span>
    <span class="code-line">  <span class="code-property">justify-items</span>: <span class="code-value">${justifyItems}</span>;</span>
    <span class="code-line">  <span class="code-property">align-items</span>: <span class="code-value">${gridAlignItems}</span>;</span>
    <span class="code-line">}</span>
`);
}

// Add Flexbox item
$addFlexItem.on('click', function() {
const itemCount = $flexDemo.children().length + 1;
$('<div>')
    .addClass('flex-item')
    .text(itemCount)
    .appendTo($flexDemo);
updateCode();
});

// Remove Flexbox item
$removeFlexItem.on('click', function() {
if ($flexDemo.children().length > 1) {
    $flexDemo.children().last().remove();
    updateCode();
}
});

// Add Grid item
$addGridItem.on('click', function() {
const itemCount = $gridDemo.children().length + 1;
$('<div>')
    .addClass('grid-item')
    .text(itemCount)
    .appendTo($gridDemo);
updateCode();
});

// Remove Grid item
$removeGridItem.on('click', function() {
if ($gridDemo.children().length > 1) {
    $gridDemo.children().last().remove();
    updateCode();
}
});

// Event listeners for Flexbox controls
$flexDirection.on('change', updateFlex);
$justifyContent.on('change', updateFlex);
$alignItems.on('change', updateFlex);
$flexWrap.on('change', updateFlex);

// Event listeners for Grid controls
$gridTemplateColumns.on('change', updateGrid);
$gridGap.on('change', updateGrid);
$justifyItems.on('change', updateGrid);
$alignItemsGrid.on('change', updateGrid);

// Initialize code display
updateCode();
});