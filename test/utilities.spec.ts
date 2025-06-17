// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as utils from '../src/util';

describe('utilities', function () {

  describe('calculatePercentage', function () {

    it('calculates percentage correctly for normal values', function () {
      expect(utils.calculatePercentage(25, 100)).toBe(25);
      expect(utils.calculatePercentage(50, 100)).toBe(50);
      expect(utils.calculatePercentage(75, 100)).toBe(75);
      expect(utils.calculatePercentage(100, 100)).toBe(100);
    });

    it('returns 0 when total is 0', function () {
      expect(utils.calculatePercentage(25, 0)).toBe(0);
      expect(utils.calculatePercentage(0, 0)).toBe(0);
      expect(utils.calculatePercentage(-10, 0)).toBe(0);
    });

    it('handles decimal values correctly', function () {
      expect(utils.calculatePercentage(1.5, 3)).toBe(50);
      expect(utils.calculatePercentage(2.5, 10)).toBe(25);
      expect(utils.calculatePercentage(33.33, 100)).toBeCloseTo(33.33, 2);
    });

    it('handles part greater than total', function () {
      expect(utils.calculatePercentage(150, 100)).toBe(150);
      expect(utils.calculatePercentage(200, 100)).toBe(200);
    });

    it('handles negative values correctly', function () {
      expect(utils.calculatePercentage(-25, 100)).toBe(-25);
      expect(utils.calculatePercentage(25, -100)).toBe(-25);
      expect(utils.calculatePercentage(-25, -100)).toBe(25);
    });

    it('handles very small and large numbers', function () {
      expect(utils.calculatePercentage(0.001, 1)).toBe(0.1);
      expect(utils.calculatePercentage(1000000, 2000000)).toBe(50);
    });

    it('handles zero part correctly', function () {
      expect(utils.calculatePercentage(0, 100)).toBe(0);
      expect(utils.calculatePercentage(0, 50)).toBe(0);
    });

  });

});