function calculateDegreeFromLabels(degree: number, labels: any[]): number {
    const perLevelDegree = degree / labels.length;
    return perLevelDegree;
}

function calculateLabelFromValue(value: number, labels: any[], minValue: number, maxValue: number): any {
    const currentValue = value / (maxValue - minValue);
    const currentIndex = Math.round((labels.length - 1) * currentValue);
    const label = labels[currentIndex];
    return label;
}

function limitValue(value: string | number, minValue: number, maxValue: number): number {
    let currentValue = 0;
    if (typeof value === 'string') {
        currentValue = parseInt(value);
    } else {
        currentValue = value;
    }
    return Math.min(Math.max(currentValue, minValue), maxValue);
}

function validateSize(current: string | number, original: number): number {
    let currentSize = original;
    if (typeof current === 'string') {
        currentSize = parseInt(current);
    } else {
        currentSize = current;
    }
    return currentSize;
}

//export default { calculateDegreeFromLabels, calculateLabelFromValue, limitValue, validateSize };