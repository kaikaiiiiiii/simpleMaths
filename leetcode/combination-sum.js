/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
    const tree = (result, currentArray, currentSum, index) => {
        if (currentSum == target) {
            result.push(currentArray.slice());
            return;
        }
        if (currentSum > target) return;

        for (let i = index; i < nums.length; i++) {
            if (currentSum < target) {
                // 对每一层遍历，尝试添加整个 nums 数组每一项数；
                // 添加任意数字后，递归遍历整个下层，再去掉本层当前数字，尝试遍历本层下一数字
                currentArray.push(nums[i]);
                tree(result, currentArray, currentSum+nums[i], i);
                currentArray.pop();
                
            } else {
                break;
            }
        }
    }

    let result = [];
    tree(result, [], 0, 0);
    return result;
};

var candidates = [2, 3, 5], target = 8;
console.log(combinationSum(candidates,target))